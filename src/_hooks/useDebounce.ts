import { useEffect, useState } from 'react'

function useDebounce(value: string, delay?: number) {
    const [debouncedValue, setDebouncedValue] = useState<string>(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

        return () => clearTimeout(timer)
    }, [value, delay])

    return debouncedValue;
}

export default useDebounce