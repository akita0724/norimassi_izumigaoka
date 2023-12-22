import { Database } from '@/types/schema'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_KEY || ""

export const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey)