const TeamCard = () => {
  const people = [
    {
      name: 'Max Whitehead',
      role: 'Co-Founder & Full Stack Developer',
      imageUrl:
        'https://dummyimage.com/255',
    },
    {
      name: 'Santiago Ospina Idrobo',
      role: 'Co-Founder & Full Stack Developer',
      imageUrl: 'https://dummyimage.com/256',
    },
    {
      name: 'Michael Whitehead',
      role: 'Partner',
      imageUrl: 'https://dummyimage.com/257',
    },
    {
      name: 'John Doe',
      role: 'Investor',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatibus.',
      imageUrl: 'https://dummyimage.com/258',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {people.map((person, index) => (
        <div key={index} className="flex items-center bg-slate-50/50 dark:bg-slate-700/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-3xl md:p-12 shadow-xl hover:backdrop-blur-xl transition-all duration-300 ease-in-out p-4">
          <img className="w-44 h-44 rounded-xl" src={person.imageUrl} alt={person.name} />
          <div className="ml-4">
            <h2 className="text-xl text-slate-900 dark:text-white font-bold">{person.name}</h2>
            <p className="text-md mt-2 text-slate-800 dark:text-slate-300">{person.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
