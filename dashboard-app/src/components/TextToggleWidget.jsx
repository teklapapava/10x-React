// src/TextToggleWidget.js

import React, { useState } from 'react';

function TextToggleWidget() {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [inputText, setInputText] = useState('');
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">ინტერაქტიული ტექსტი და გადამრთველი</h3>
  
        <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setIsTextVisible(!isTextVisible)}
        >
            {isTextVisible ? 'Hide Text' : 'Show Text'}
        </button>
        {isTextVisible && (
            <p className="mt-4 text-gray-700">
        {inputText ? inputText : 'თქვენ ჯერ არ დაგიწერიათ ტექსტი.'}
            </p>
        )}
        <input type="text" className="mt-4 p-2 border rounded w-full" placeholder="შეიყვანეთ ტექსტი..."     
        onChange ={(e) => setInputText(e.target.value.trim())}
        
        />
        </div>
    );
    }

    export default TextToggleWidget;














