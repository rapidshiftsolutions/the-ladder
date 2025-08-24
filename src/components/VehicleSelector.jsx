'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Car, Calendar, Settings, CheckCircle, AlertCircle } from 'lucide-react'
import { vehicles, allMakes, findVehicles } from '/src/data/vehicles'

export default function VehicleSelector({ onVehicleSelect, className = '' }) {
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [compatibleVehicles, setCompatibleVehicles] = useState([])
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [isOpen, setIsOpen] = useState({ make: false, model: false, year: false })

  // Get available models based on selected make
  const availableModels = selectedMake
    ? [...new Set(vehicles.filter(v => v.make === selectedMake).map(v => v.model))]
    : []

  // Get available years based on selected make and model
  const availableYears = selectedMake && selectedModel
    ? vehicles
        .filter(v => v.make === selectedMake && v.model === selectedModel)
        .flatMap(v => v.years)
        .sort((a, b) => parseInt(b) - parseInt(a)) // Sort newest first
    : []

  // Find compatible vehicles when selections change
  useEffect(() => {
    if (selectedMake && selectedModel && selectedYear) {
      const compatible = findVehicles({
        make: selectedMake,
        model: selectedModel,
        year: selectedYear
      })
      setCompatibleVehicles(compatible)
      
      if (compatible.length === 1) {
        setSelectedVehicle(compatible[0])
        onVehicleSelect && onVehicleSelect(compatible[0])
      } else if (compatible.length === 0) {
        setSelectedVehicle(null)
        onVehicleSelect && onVehicleSelect(null)
      }
    } else {
      setCompatibleVehicles([])
      setSelectedVehicle(null)
      onVehicleSelect && onVehicleSelect(null)
    }
  }, [selectedMake, selectedModel, selectedYear, onVehicleSelect])

  // Reset dependent selections when parent changes
  useEffect(() => {
    setSelectedModel('')
    setSelectedYear('')
  }, [selectedMake])

  useEffect(() => {
    setSelectedYear('')
  }, [selectedModel])

  const CustomSelect = ({ label, value, options, onSelect, placeholder, icon: Icon, isOpen, onToggle }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-text-primary mb-2">
        <Icon className="w-4 h-4 inline mr-2" />
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={onToggle}
          className={`w-full px-4 py-3 text-left bg-surface-800/50 backdrop-blur-sm border rounded-lg transition-all duration-300 ${
            isOpen 
              ? 'border-primary-500 ring-2 ring-primary-500/20' 
              : 'border-surface-600 hover:border-primary-500/50'
          } ${
            !options.length && value !== '' 
              ? 'opacity-50 cursor-not-allowed' 
              : 'cursor-pointer'
          }`}
          disabled={!options.length && value === ''}
        >
          <span className={value ? 'text-text-primary' : 'text-text-secondary'}>
            {value || placeholder}
          </span>
          <ChevronDown className={`w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} />
        </button>
        
        <AnimatePresence>
          {isOpen && options.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 w-full mt-2 bg-surface-800 border border-surface-600 rounded-lg shadow-2xl max-h-60 overflow-y-auto"
            >
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onSelect(option)
                    onToggle()
                  }}
                  className="w-full px-4 py-3 text-left text-text-primary hover:bg-primary-500/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                >
                  {option}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.div
      className={`bg-surface-800/30 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 ${className}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">Select Your Vehicle</h3>
        <p className="text-text-secondary text-sm">
          Choose your vehicle details to check compatibility and get accurate pricing
        </p>
      </motion.div>

      <div className="space-y-4">
        <motion.div variants={itemVariants}>
          <CustomSelect
            label="Make"
            value={selectedMake}
            options={allMakes}
            onSelect={setSelectedMake}
            placeholder="Select vehicle make..."
            icon={Car}
            isOpen={isOpen.make}
            onToggle={() => setIsOpen({ ...isOpen, make: !isOpen.make })}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <CustomSelect
            label="Model"
            value={selectedModel}
            options={availableModels}
            onSelect={setSelectedModel}
            placeholder={selectedMake ? "Select model..." : "Select make first"}
            icon={Settings}
            isOpen={isOpen.model}
            onToggle={() => setIsOpen({ ...isOpen, model: !isOpen.model })}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <CustomSelect
            label="Year"
            value={selectedYear}
            options={availableYears}
            onSelect={setSelectedYear}
            placeholder={selectedModel ? "Select year..." : "Select model first"}
            icon={Calendar}
            isOpen={isOpen.year}
            onToggle={() => setIsOpen({ ...isOpen, year: !isOpen.year })}
          />
        </motion.div>
      </div>

      {/* Compatibility Status */}
      <AnimatePresence>
        {selectedMake && selectedModel && selectedYear && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-6 border-t border-surface-600"
          >
            {compatibleVehicles.length > 0 ? (
              <div className="flex items-start space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-400">Vehicle Compatible!</h4>
                  <p className="text-green-300 text-sm mt-1">
                    Your {selectedYear} {selectedMake} {selectedModel} is compatible with our repair services.
                  </p>
                  {selectedVehicle && (
                    <div className="mt-3 space-y-1">
                      <p className="text-text-primary text-sm">
                        <span className="font-medium">Screen Type:</span> {selectedVehicle.screenType}
                      </p>
                      <p className="text-text-primary text-sm">
                        <span className="font-medium">Screen Size:</span> {selectedVehicle.screenSize}
                      </p>
                      <p className="text-text-primary text-sm">
                        <span className="font-medium">Repair Time:</span> {selectedVehicle.estimatedRepairTime}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-start space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-400">Vehicle Not Currently Supported</h4>
                  <p className="text-red-300 text-sm mt-1">
                    We don't currently support {selectedYear} {selectedMake} {selectedModel} repairs.
                  </p>
                  <p className="text-text-secondary text-sm mt-2">
                    Contact us at <a href="tel:2055221162" className="text-primary-500 hover:text-primary-400">(205) 522-1162</a> to check if we can help with your specific model.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}