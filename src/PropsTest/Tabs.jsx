import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Define the tabs array within the component
    const tabs = [
        { title: 'Entrées', content: 'Entrées Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo a odit numquam beatae minus, inventore excepturi eligendi molestiae quidem aperiam harum, dolor ab. Harum iusto consequatur, deleniti sapiente accusamus quo voluptatum, minus, beatae magni ut voluptate. Dicta deserunt doloribus voluptatem aperiam nemo omnis laudantium fugiat cumque corporis, molestias, sapiente quis maiores sit ratione nihil ad assumenda. Assumenda, temporibus voluptates ratione distinctio rem ipsam odio quae? Temporibus quidem suscipit alias aut incidunt aliquid minus doloribus dolore ducimus sed consequatur, nulla tempora, corporis praesentium eaque ipsum modi libero optio est quia atque? Quisquam, vitae quidem? Dolore eligendi delectus quae maiores cum.' },
        { title: 'Plats', content: 'Plats Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo a odit numquam beatae minus, inventore excepturi eligendi molestiae quidem aperiam harum, dolor ab. Harum iusto consequatur, deleniti sapiente accusamus quo voluptatum, minus, beatae magni ut voluptate. Dicta deserunt doloribus voluptatem aperiam nemo omnis laudantium fugiat cumque corporis, molestias, sapiente quis maiores sit ratione nihil ad assumenda. Assumenda, temporibus voluptates ratione distinctio rem ipsam odio quae? Temporibus quidem suscipit alias aut incidunt aliquid minus doloribus dolore ducimus sed consequatur, nulla tempora, corporis praesentium eaque ipsum modi libero optio est quia atque? Quisquam, vitae quidem? Dolore eligendi delectus quae maiores cum.' },
        { title: 'Accompagnements', content: 'Accompagnements Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo a odit numquam beatae minus, inventore excepturi eligendi molestiae quidem aperiam harum, dolor ab. Harum iusto consequatur, deleniti sapiente accusamus quo voluptatum, minus, beatae magni ut voluptate. Dicta deserunt doloribus voluptatem aperiam nemo omnis laudantium fugiat cumque corporis, molestias, sapiente quis maiores sit ratione nihil ad assumenda. Assumenda, temporibus voluptates ratione distinctio rem ipsam odio quae? Temporibus quidem suscipit alias aut incidunt aliquid minus doloribus dolore ducimus sed consequatur, nulla tempora, corporis praesentium eaque ipsum modi libero optio est quia atque? Quisquam, vitae quidem? Dolore eligendi delectus quae maiores cum.' },
        { title: 'Specialités', content: 'Specialités Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo a odit numquam beatae minus, inventore excepturi eligendi molestiae quidem aperiam harum, dolor ab. Harum iusto consequatur, deleniti sapiente accusamus quo voluptatum, minus, beatae magni ut voluptate. Dicta deserunt doloribus voluptatem aperiam nemo omnis laudantium fugiat cumque corporis, molestias, sapiente quis maiores sit ratione nihil ad assumenda. Assumenda, temporibus voluptates ratione distinctio rem ipsam odio quae? Temporibus quidem suscipit alias aut incidunt aliquid minus doloribus dolore ducimus sed consequatur, nulla tempora, corporis praesentium eaque ipsum modi libero optio est quia atque? Quisquam, vitae quidem? Dolore eligendi delectus quae maiores cum.' },
        { title: 'Boissons', content: 'Boissons Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo a odit numquam beatae minus, inventore excepturi eligendi molestiae quidem aperiam harum, dolor ab. Harum iusto consequatur, deleniti sapiente accusamus quo voluptatum, minus, beatae magni ut voluptate. Dicta deserunt doloribus voluptatem aperiam nemo omnis laudantium fugiat cumque corporis, molestias, sapiente quis maiores sit ratione nihil ad assumenda. Assumenda, temporibus voluptates ratione distinctio rem ipsam odio quae? Temporibus quidem suscipit alias aut incidunt aliquid minus doloribus dolore ducimus sed consequatur, nulla tempora, corporis praesentium eaque ipsum modi libero optio est quia atque? Quisquam, vitae quidem? Dolore eligendi delectus quae maiores cum.' },
        { title: 'Cocktails', content: 'Cocktails Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo a odit numquam beatae minus, inventore excepturi eligendi molestiae quidem aperiam harum, dolor ab. Harum iusto consequatur, deleniti sapiente accusamus quo voluptatum, minus, beatae magni ut voluptate. Dicta deserunt doloribus voluptatem aperiam nemo omnis laudantium fugiat cumque corporis, molestias, sapiente quis maiores sit ratione nihil ad assumenda. Assumenda, temporibus voluptates ratione distinctio rem ipsam odio quae? Temporibus quidem suscipit alias aut incidunt aliquid minus doloribus dolore ducimus sed consequatur, nulla tempora, corporis praesentium eaque ipsum modi libero optio est quia atque? Quisquam, vitae quidem? Dolore eligendi delectus quae maiores cum.' }
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const renderTabs = () => {
        return tabs.map((tab, index) => (
            <div key={index} onClick={() => handleTabClick(index)} className={activeTab === index ? 'active w-full lg:w-1/6 text-white bg-cyan-600 p-2 transition duration-500 ease-in-out hover:bg-cyan-800 transform hover:-translate-y-1 hover:scale-110' : 'text-cyan-600'}>
                {tab.title}
            </div>
        ));
    };

    return (
        <div className="tabs-container container mx-auto flex flex-col gap-8 relative">
            <div className="flex justify-between items-center font-bold cursor-pointer">{renderTabs()}</div>
            <div className="tab-content">{tabs[activeTab]?.content}</div>
        </div>
    );
};

export default Tabs;
