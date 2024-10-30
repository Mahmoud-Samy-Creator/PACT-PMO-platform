import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Dropdown.css';

interface Option {
    label: string;
    value: string;
}

interface DropdownProps {
    header: string;
    options: Option[];
    handler: (value: string) => void;
}

export default function Dropdown({ header, options, handler }: DropdownProps) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [buttonLabel, setButtonLabel] = useState("Search here...");
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null); 

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredLinks = options.filter(option => 
        option?.label?.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    function handleCheck(value: string) {
        handler(value);
        setDropdownVisible(false);
        setButtonLabel(value);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownVisible(false);
            }
        }

        if (dropdownVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownVisible]);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <header>{header}</header>
            <button type="button" onClick={toggleDropdown} className="dropbtn flex justify-between items-center pl-[10px] pr-[10px] text-[12px]">
                {buttonLabel}
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {dropdownVisible && (
                <div id="myDropdown" className="dropdown-content min-h-[100px] max-h-[300px] overflow-y-scroll">
                    <input
                        type="text"
                        placeholder="Search.."
                        id="myInput"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    {filteredLinks.map((option) => (
                        <span className="block p-[10px] cursor-pointer text-[15px]" key={option.value} onClick={() => {handleCheck(option.value)}}>
                            {option.label}
                        </span>))}
                </div>
            )}
        </div>
    );
}
