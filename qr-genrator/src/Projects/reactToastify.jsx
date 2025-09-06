import React from 'react';
import { Button } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactToastify = () => {
    return (
        <div className="gap-4 min-h-[90vh] flex flex-col justify-center items-center bg-linear-to-r from-cyan-100 via-blue-300 to-indigo-400">
             <div>
                <h1 className='text-3xl font-bold mt-6 mb-5'>Project No.2</h1>

            </div>
            <div className="flex flex-row gap-4 bg-white p-10 rounded-lg shadow-lg">
                <Button
                    type="primary"
                    danger
                    onClick={() => toast.error('Please fix the Error!')}
                >
                    Error
                </Button>

                <Button
                    type="primary"
                    onClick={() => toast.success('Successfully Submitted!')}
                >
                    Success
                </Button>

                <Button
                    type="primary"
                    onClick={() => toast.warning('Invalid Input, Check again!')}
                >
                    Warning
                </Button>

                <Button
                    type="primary"
                    onClick={() => toast.info('This is info toast!')}
                >
                    Info
                </Button>
            </div>

            {/* ToastContainer ek baar hi lagta hai */}
            <ToastContainer
                position="top-center"
                autoClose={5000} // 2 seconds
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover />
        </div>
    );
};

export default ReactToastify;
