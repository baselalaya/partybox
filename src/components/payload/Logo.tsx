import React from 'react'
import Image from 'next/image'

export const Logo: React.FC = () => {
    return (
        <div className="flex items-center gap-2">
            <img
                src="/logo.svg"
                alt="Partybox Logo"
                className="max-w-[150px] h-auto max-h-[40px]"
            />
        </div>
    )
}
