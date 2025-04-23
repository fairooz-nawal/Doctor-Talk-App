import React from 'react';

const Blogs = ({blog}) => {
    const {question,answer} = blog;
    console.log(question)
    return (
        <div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">{question}</div>
                <div className="collapse-content text-sm"><span className='text-blue-700 font-bold'>Answer: </span><br />{answer}</div>
            </div>
        </div>
    );
};

export default Blogs;