import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://phpowjikthjfauoskdvc.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODAxNTY4NiwiZXhwIjoxOTMzNTkxNjg2fQ.q91Sveo2Xa1lBjp3QfebfZZBzWG9sd6fyl0sKB3GLbw'

const client = createClient(supabaseUrl, supabaseKey)

export default client
