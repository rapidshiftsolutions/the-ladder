'use client'

import { useState, useMemo } from 'react'
import { Quote, Calendar, MapPin, Filter, Search, ChevronDown, Heart, Star, CheckCircle, User } from 'lucide-react'
import clientStoriesData from '/src/data/client-stories.json'
import Image from 'next/image'

export default function ClientStoriesGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [visibleStories, setVisibleStories] = useState(6)

  const { stories, categories } = clientStoriesData

  const filteredStories = useMemo(() => {
    return stories.filter(story => {
      const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory
      const matchesSearch = !searchTerm || 
        story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.barrier.toLowerCase().includes(searchTerm.toLowerCase())
      
      return matchesCategory && matchesSearch
    })
  }, [stories, selectedCategory, searchTerm])

  const handleLoadMore = () => {
    setVisibleStories(prev => prev + 6)
  }

  const getCategoryIcon = (category) => {
    const icons = {
      'Transportation': '🚗',
      'Financial Assistance': '💰',
      'Emergency Housing': '🏠',
      'Recovery Support': '🌱',
      'Employment Support': '💼',
      'Crisis Support': '🆘',
      'Home Repair': '🔨',
      'Utility Assistance': '⚡'
    }
    return icons[category] || '❤️'
  }

  return (
    <div className="w-full">
      {/* Search and Filter Controls */}
      <div className="mb-12">
        <div className="glass-card bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] w-4 h-4" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass-input w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-md border border-white/40 rounded-xl focus:border-[var(--ladder-blue)]/60 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="glass-input appearance-none bg-white/60 backdrop-blur-md border border-white/40 rounded-xl px-4 py-3 pr-10 focus:border-[var(--ladder-blue)]/60 focus:outline-none transition-all duration-300 min-w-[150px]"
                >
                  <option value="All">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] w-4 h-4 pointer-events-none" />
              </div>

              <div className="text-sm text-[var(--text-secondary)] bg-white/60 backdrop-blur-md rounded-lg px-3 py-2 border border-white/40">
                {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
        {filteredStories.slice(0, visibleStories).map((story) => (
          <div key={story.id} className="glass-card bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl hover:bg-white/80 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            {/* Story Header */}
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {story.image ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/60">
                      <Image 
                        src={story.image}
                        alt={`${story.name} - Success Story`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Fallback to default avatar if image fails to load
                          e.target.style.display = 'none'
                          e.target.nextElementSibling.style.display = 'flex'
                        }}
                      />
                      <div className="absolute inset-0 glass-card bg-[var(--ladder-blue)]/10 backdrop-blur-md border border-white/40 rounded-full hidden items-center justify-center">
                        <User className="w-6 h-6 text-[var(--ladder-blue)]" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 glass-card bg-[var(--ladder-blue)]/10 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-[var(--ladder-blue)]" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] text-lg">{story.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <span>{getCategoryIcon(story.category)}</span>
                      <span>{story.category}</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[var(--text-muted)] bg-white/50 backdrop-blur-sm rounded-lg px-2 py-1">
                  {story.timeframe}
                </div>
              </div>

              {/* Story Content */}
              <div className="space-y-4">
                {/* Quote */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-[var(--ladder-red)]/40 absolute -top-1 -left-1" />
                  <blockquote className="text-[var(--text-secondary)] leading-relaxed pl-6">
                    <span className="line-clamp-4 md:line-clamp-3">
                      {story.quote.length > 200 ? `${story.quote.substring(0, 200)}...` : story.quote}
                    </span>
                  </blockquote>
                </div>

                {/* Barrier & Outcome - Mobile Compact */}
                <div className="space-y-3">
                  <div className="glass-card bg-white/60 backdrop-blur-md border border-white/40 rounded-lg p-3">
                    <div className="text-xs font-semibold text-[var(--ladder-red)] uppercase tracking-wider mb-1">
                      Barrier Removed:
                    </div>
                    <div className="text-sm text-[var(--text-secondary)]">
                      {story.barrier}
                    </div>
                  </div>
                  
                  <div className="glass-card bg-white/60 backdrop-blur-md border border-white/40 rounded-lg p-3">
                    <div className="text-xs font-semibold text-[var(--ladder-green)] uppercase tracking-wider mb-1">
                      Outcome:
                    </div>
                    <div className="text-sm text-[var(--text-secondary)]">
                      {story.outcome}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Footer */}
            <div className="px-6 py-4 bg-white/40 backdrop-blur-md border-t border-white/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--ladder-green)]" />
                  <span className="text-xs text-[var(--text-secondary)]">Success Story</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-[var(--ladder-red)]" />
                  <span className="text-xs text-[var(--text-secondary)]">Birmingham, AL</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleStories < filteredStories.length && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="glass-button bg-[var(--ladder-blue)]/90 backdrop-blur-md text-white font-semibold px-8 py-3 rounded-xl border border-white/30 hover:bg-[var(--ladder-blue)] transition-all duration-300"
          >
            Load More Stories ({filteredStories.length - visibleStories} remaining)
          </button>
        </div>
      )}

      {/* No Results */}
      {filteredStories.length === 0 && (
        <div className="text-center py-12">
          <div className="glass-card bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-8 max-w-md mx-auto">
            <Search className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">No Stories Found</h3>
            <p className="text-[var(--text-secondary)] mb-4">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="text-[var(--ladder-blue)] hover:text-[var(--ladder-blue)]/80 font-semibold transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* Category Statistics - Mobile Hidden, Desktop Visible */}
      <div className="hidden lg:block mt-16">
        <div className="glass-card bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 text-center">
            Stories by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(category => {
              const count = stories.filter(story => story.category === category).length
              const percentage = Math.round((count / stories.length) * 100)
              return (
                <div key={category} className="text-center p-4 glass-card bg-white/50 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/70 transition-all duration-300">
                  <div className="text-2xl mb-2">{getCategoryIcon(category)}</div>
                  <div className="text-lg font-bold text-[var(--ladder-blue)]">{count}</div>
                  <div className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider">
                    {category}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">{percentage}%</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}