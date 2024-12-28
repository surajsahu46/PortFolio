import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Command {
  input: string;
  output: string;
}

const Terminal = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');

  const handleCommand = (input: string) => {
    const newCommand: Command = { input, output: '' };
    
    switch (input.toLowerCase()) {
      case 'help':
        newCommand.output = 'Available commands: about, skills, contact, clear';
        break;
      case 'about':
        newCommand.output = 'Hi! I\'m Suraj, a fullstack developer passionate about creating amazing web experiences.';
        break;
      case 'skills':
        newCommand.output = 'Frontend: React, TypeScript, Tailwind CSS\nBackend: Node.js, Express, PostgreSQL\nTools: Git, Docker, AWS';
        break;
      case 'contact':
        newCommand.output = 'Email: sahu.suraj.3141@gmail.com\nPhone: +91 8691921917';
        break;
      case 'clear':
        setCommands([]);
        return;
      default:
        newCommand.output = 'Command not found. Type "help" for available commands.';
    }

    setCommands([...commands, newCommand]);
    setCurrentInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 rounded-lg p-4 font-mono text-sm"
    >
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      
      <div className="text-gray-300">
        {commands.map((cmd, i) => (
          <div key={i} className="mb-2">
            <div className="flex items-center">
              <span className="text-green-400">➜</span>
              <span className="text-blue-400 ml-2">~</span>
              <span className="text-white ml-2">{cmd.input}</span>
            </div>
            <div className="ml-4 whitespace-pre-wrap">{cmd.output}</div>
          </div>
        ))}
        
        <div className="flex items-center">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400 ml-2">~</span>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="ml-2 bg-transparent text-white outline-none flex-1"
            placeholder="Type 'help' for commands..."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;