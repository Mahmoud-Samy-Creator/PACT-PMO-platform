type SectionHeader_TP = {
    icon: React.ReactNode,
    header: string,
    children?: React.ReactNode,
}
export default function SectionHeader({icon,header,children}:SectionHeader_TP) {
    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-[5px] text-[#91969B]">
                <span className="text-[16px]">{icon}</span>
                <p className="text-[14px]">{header}</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
