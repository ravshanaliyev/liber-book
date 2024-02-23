import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Sozlamalar = () => {
    return (
        <div className='border rounded-xl shadow-lg p-6'>
            <h1 className='text-3xl'>Sozlamalar</h1>
            <p className='my-2'>Sizning sozlamalaringiz</p>
            <Input className='w-[300px] my-3' type="text" placeholder="username" />
            <Input className='w-[300px] my-3' type="email" placeholder="email" />
            <Input className='w-[300px] my-3' type="password" placeholder="password" />
            <Button className='w-[300px] my-3'>Saqlash</Button>
        </div>
    )
}

export default Sozlamalar