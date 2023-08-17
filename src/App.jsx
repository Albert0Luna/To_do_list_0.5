import React from 'react';
// import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ToDo } from './components/ToDo';
import { TodoProvider } from './context/todo';

export function App() {

    return (
        <TodoProvider>
            <div className='w-full h-full font-sans text-zinc-50 flex-row'>
                <Header />
                <ToDo />
                {/* <Footer /> */}
            </div>
        </TodoProvider>  
    );
}

