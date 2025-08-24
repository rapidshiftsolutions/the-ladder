// Helper script to update project ID in all configuration files
import { readFileSync, writeFileSync } from 'fs'

function updateProjectId(newProjectId) {
  console.log(`🔄 Updating project ID to: ${newProjectId}`)
  
  // Update .env.local
  let envContent = readFileSync('./.env.local', 'utf8')
  envContent = envContent.replace(
    /NEXT_PUBLIC_SANITY_PROJECT_ID="[^"]*"/,
    `NEXT_PUBLIC_SANITY_PROJECT_ID="${newProjectId}"`
  )
  writeFileSync('./.env.local', envContent)
  console.log('✅ Updated .env.local')
  
  // Update sanity.json
  let sanityJson = JSON.parse(readFileSync('./sanity.json', 'utf8'))
  sanityJson.api.projectId = newProjectId
  writeFileSync('./sanity.json', JSON.stringify(sanityJson, null, 2))
  console.log('✅ Updated sanity.json')
  
  // Update env.js fallback
  let envJs = readFileSync('./src/sanity/env.js', 'utf8')
  envJs = envJs.replace(
    /export const projectId = process\.env\.NEXT_PUBLIC_SANITY_PROJECT_ID \|\| '[^']*'/,
    `export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '${newProjectId}'`
  )
  writeFileSync('./src/sanity/env.js', envJs)
  console.log('✅ Updated src/sanity/env.js')
  
  console.log('\n🎉 Project ID updated successfully!')
  console.log('📝 Next steps:')
  console.log('  1. Restart the development server: npm run dev')
  console.log('  2. Visit: http://localhost:3001/studio')
  console.log('  3. Login with your Google account')
}

// Check if project ID was provided as argument
const newProjectId = process.argv[2]
if (!newProjectId) {
  console.log('❌ Please provide a project ID as an argument')
  console.log('Usage: node update-project-id.js YOUR_PROJECT_ID')
  console.log('\nTo get a project ID:')
  console.log('1. Visit https://sanity.io/manage')
  console.log('2. Create a new project or find existing one')
  console.log('3. Copy the project ID and run this script')
  process.exit(1)
}

updateProjectId(newProjectId)