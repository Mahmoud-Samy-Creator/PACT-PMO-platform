interface FormOptionsFieldProps {
    handler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    header: string;
    options: React.ReactNode;
}

function FormOptionsField({ handler, header, options }: FormOptionsFieldProps) {
    return (
        <div className="flex flex-col gap-[3px] w-full">
            <span className="font-medium text-[14px] text-[#09242E]">{header}</span>
            <select
                name={header}
                className="py-[10px] px-[10px] border border-[#DBEDF5] outline-none shadow text-[12px] text-[#A1A1A1]"
                onChange={handler}
            >
                <option value="" defaultValue='true'>Select Here ..</option>
                {options}
            </select>
        </div>
    );
}

export default FormOptionsField;