'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { useField, useFormFields, TextInput } from '@payloadcms/ui'

type Props = {
    path: string
    label?: string
    required?: boolean
}

export const SlugField: React.FC<Props> = ({ path, label, required }) => {
    const { value, setValue } = useField<string>({ path })
    const title = useFormFields(([fields]) => fields.title)
    const titleValue = typeof title?.value === 'string' ? title.value : ''

    // State to track if the user has manually edited the slug
    // We initialize based on whether both exist (editing existing doc) or not
    const [isManuallyEdited, setIsManuallyEdited] = useState(false)

    // Format helper
    const formatSlug = useCallback((val: string) => {
        return val
            .toLowerCase()
            .trim()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
    }, [])

    useEffect(() => {
        // If we have a title and the user hasn't manually edited the slug, auto-generate it
        // Check !value allows it to populate initially even if we didn't flag "isManuallyEdited" yet
        if (titleValue && !isManuallyEdited) {
            const formattedSlug = formatSlug(titleValue)

            // Avoid infinite loops or unnecessary updates
            if (formattedSlug !== value) {
                setValue(formattedSlug)
            }
        }
    }, [titleValue, isManuallyEdited, setValue, value, formatSlug])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        // If the user types something, we lock it (prevent auto-updates)
        // Unless they clear it - then maybe we want to unlock?
        // For now, simple rule: touch = lock.
        setIsManuallyEdited(true)
    }

    return (
        <div className="field-type text">
            <label className="field-label">
                {label || 'Slug'} {required && <span className="required">*</span>}
            </label>
            <TextInput
                path={path}
                value={value || ''}
                onChange={handleChange}
            />
        </div>
    )
}
