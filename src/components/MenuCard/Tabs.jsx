import React, { useState } from 'react';

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };
    
    return (
        <div className="w-full flex flex-col px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row lg:gap-8 justify-between border-b border-gray-200">
                {children.map(child => (
                    <button
                        key={child.props.label}
                        className={`${
                        activeTab === child.props.label ? 'border-b-2 border-cyan-600 self-start' : ''
                        } flex-1 text-cyan-700 text-lg self-start font-medium py-2`}
                        onClick={e => handleClick(e, child.props.label)}>
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className="py-4">
                {children.map(child => {
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

const Tab = ({ label, children }) => {
    return (
        <div label={label} className="hidden">
            {children}
        </div>
    );
};

export { Tabs, Tab };