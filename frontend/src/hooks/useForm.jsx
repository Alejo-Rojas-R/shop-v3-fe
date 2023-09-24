import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formData, setFormData ] = useState( initialForm );

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [ name ]: value
        });
    }

    const handleReset = () => {
        setFormData( initialForm );
    }

    return {
        ...formData,
        formData,
        handleChange,
        handleReset,
    }
}