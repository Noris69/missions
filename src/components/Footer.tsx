import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export const Footer: FC = () => {
    return (
        <div className="flex" style={{backgroundColor:"#F1F2DA"}}>
            <footer className="   hover:text-white w-screen" >
                <div className="ml-12 py-12 mr-12">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-8 md:space-x-12 relative">
                        <div className='flex flex-col col-span-2 mx-4 items-center md:items-start'>
                            <div className='flex flex-row ml-1'>
                                
                            </div>
                            <div className="flex md:ml-2">
                                
                                
                            </div>
                            
                        </div>

                        <div className="mb-6 items-center mx-auto max-w-screen-lg">

                            <div className="flex flex-col mb-0 gap-2">
                             
                            </div>
                        </div>

                        <div className="mb-6 items-center mx-auto max-w-screen-lg">

                            <div className="flex flex-col mb-0 gap-2">
                               
                            </div>
                        </div>

                        <div className="mb-6 items-center mx-auto max-w-screen-lg">

                            <div className="flex flex-col mb-0 gap-2">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
