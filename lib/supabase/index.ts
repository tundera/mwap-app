import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://phpowjikthjfauoskdvc.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY ?? ''
const client = createClient(supabaseUrl, supabaseKey)

export default client
