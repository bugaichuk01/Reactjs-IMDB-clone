import React from "react";
import {Tab, TabList, TabPanel, Tabs as ReactTabs} from "react-tabs";

type TabItem = {
    txt: string;
    condition?: unknown;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
}

export const Tabs: React.FC<TabsProps> = ({tabs}) => {
    return (
        <ReactTabs className='react-tabs'>
            <TabList>
                {tabs.map(({txt, condition = true}) => (
                    <React.Fragment key={txt}>
                        {condition ? <Tab>{txt}</Tab> : null}
                    </React.Fragment>
                ))}
            </TabList>
            {tabs.map(({txt, content, condition = true}) => (
                <React.Fragment key={txt}>
                    {condition ? (
                        <TabPanel>{content}</TabPanel>
                    ) : null}
                </React.Fragment>
            ))}
        </ReactTabs>
    );
}