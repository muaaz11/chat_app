import { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from './supabase';
import { useState } from 'react';

const Login = async () => {

    const [loading, setLoading] = useState(false) 

    try {
        setLoading(true)

        const {data, error } = await supabase.auth.
    } catch (error) {
        console.log("error logging, Please try again", error);
    }
}