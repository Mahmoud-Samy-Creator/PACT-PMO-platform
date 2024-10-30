import React from 'react';

interface FormFieldProps {
    icon: React.ReactNode | null;
    header: string;
    handler: React.ChangeEventHandler<HTMLInputElement>;
    type: string;
}

function FormField({ icon, header, handler, type }: FormFieldProps) {
    return(
        <div className="flex flex-col gap-[3px] w-full">
            <span className="font-medium text-[14px] text-[#09242E]">{header}</span>
            <div className="relative">
                <input
                    type={type}
                    placeholder="Type Here .."
                    className="w-full py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]"
                    onChange={handler}
                    name={`${header} Value`}
                    required
                />
                {type === "date" ? null : icon}
            </div>
        </div>
    )
}

export default FormField;