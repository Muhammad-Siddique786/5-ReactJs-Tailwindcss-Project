import React from 'react';
import { Button } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactToastify = () => {
    return (
        <div className="gap-4 min-h-[90vh] flex justify-center items-center bg-gradient-to-br from-gray-300 via-gray-500 to-gray-700">
            <div className="flex flex-col gap-4">
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
