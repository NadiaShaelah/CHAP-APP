import React, { useState } from 'react';

function MenuCard() {
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
            <div key={index} onClick={() => handleTabClick(index)} className={activeTab === index ? 'active lg:w-1/6 text-cyan-800 w-fit border-solid border-b-4 border-cyan-800 p-2 transition duration-500 ease-in-out transform' : 'text-cyan-600'}>
                {tab.title}
            </div>
        ));
    };

    return (
        <div className="tabs-container container mx-auto flex flex-col gap-8 relative px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center font-bold cursor-pointer">{renderTabs()}</div>
            <div className="tab-content">{tabs[activeTab]?.content}</div>
        </div>
    );
}

export default MenuCard
