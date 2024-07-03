import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://herynxnsubcodurqnyry.supabase.co";
const anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlcnlueG5zdWJjb2R1cnFueXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NzIxMjUsImV4cCI6MjAzNTU0ODEyNX0.mhypNDXhK2PX80MWwcv9trtNcNb-fIppnVH9r5m9cns";

export const supabase = createClient(supabaseUrl, anonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
