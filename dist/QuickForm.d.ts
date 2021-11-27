import React from 'react';
import { SubmitHandler } from 'react-hook-form';
interface FormFields {
    [key: string]: any;
}
interface FormFieldProps {
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    required?: boolean;
}
declare const QuickForm: <T extends FormFields>({ properties, onSubmit, }: {
    properties: Record<keyof T, FormFieldProps>;
    onSubmit: SubmitHandler<T>;
}) => JSX.Element;
export default QuickForm;
