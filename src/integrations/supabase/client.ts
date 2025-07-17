
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = "https://bcazmjhzycmhhfjqtzgw.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjYXptamh6eWNtaGhmanF0emd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NDQ3MzcsImV4cCI6MjA2ODIyMDczN30.58hr9Ioj7RgpwmN2p-ri_P8yCebGXFmjbqlaZnrHUzQ"

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
