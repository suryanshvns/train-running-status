import React from 'react';
import { useRouter } from 'next/navigation';


const Header = () => {
    const router = useRouter(); // Initialize useRouter

    const handleClick = () => {
        router.push('/TrainRunningStatus');
    };

    return (
        <header>
            <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between mx-auto max-w-screen-xl">
                    <form className="flex-grow max-w-md">
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Train Running Status"
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Check Status
                            </button>
                        </div>
                    </form>

                    {/* Navigation Links */}
                    <div className="flex space-x-6">
                        <button 
                            onClick={handleClick}
                            className="text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 font-semibold">
                            PNR Status
                        </button>
                        <button 
                            className="text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 font-semibold">
                            Train Running Status
                        </button>
                        <button 
                            className="text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 font-semibold">
                            Train Schedule
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
