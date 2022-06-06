import React from "react";

const UpdateForm = () => {
    return (
        <form>
                <input
                    type='text'
                    name='title'
                    className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'>
                </input>
                <input
                    type='text'
                    name='creator'
                    className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'>
                </input>
                <input
                    type='text'
                    name='releaseDate'
                    className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'>
                </input>
                <input
                    type='text'
                    name='finishDate'
                    className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'>
                </input>
                <textarea
                    type='text'
                    name='description'
                    className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'>
                </textarea>

        </form>
    );
}

export default UpdateForm;