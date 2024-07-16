const Live = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>This is my live page</div>
      <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        <div className="relative group bg-primary-2 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-primary-2/80 hover:smooth-hover">
          <img className="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="cuisine" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">Cuisine</h4>
          <p className="text-white/80">55 members</p>
          <p className="absolute top-2 text-black inline-flex items-center text-xs">22 Online <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
        </div>
        <div className="relative group bg-primary-2 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-primary-2/80 hover:smooth-hover">
          <img className="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="art" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">Art</h4>
          <p className="text-white/80">132 members</p>
          <p className="absolute top-2 text-black inline-flex items-center text-xs">4 Online <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
        </div>
        <div className="relative group bg-primary-2 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-primary-2/80 hover:smooth-hover">
          <img className="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="gaming" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">Gaming</h4>
          <p className="text-white/80">207 members</p>
          <p className="absolute top-2 text-black inline-flex items-center text-xs">0 Online <span className="ml-2 w-2 h-2 block bg-red-400 rounded-full group-hover:animate-pulse"></span></p>
        </div>
        <div className="relative group bg-primary-2 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-primary-2/80 hover:smooth-hover">
          <img className="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80" alt="cinema" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">cinema</h4>
          <p className="text-white/80">105 members</p>
          <p className="absolute top-2 text-black inline-flex items-center text-xs">12 Online <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
        </div>
        <div className="relative group bg-primary-2 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-primary-2/80 hover:smooth-hover">
          <img className="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="song" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">Song</h4>
          <p className="text-white/80">67 members</p>
          <p className="absolute top-2 text-black inline-flex items-center text-xs">3 Online <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
        </div>
        <div className="relative group bg-primary-2 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-primary-2/80 hover:smooth-hover">
          <img className="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="code" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">Code</h4>
          <p className="text-white/80">83 members</p>
          <p className="absolute top-2 text-black inline-flex items-center text-xs">43 Online <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
        </div>
        <div className="relative group bg-primary-2 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-primary-2/80 hover:smooth-hover">
          <img className="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="dancing" />
          <h4 className="text-white text-2xl font-bold capitalize text-center">Dancing</h4>
          <p className="text-white/80">108 members</p>
          <p className="absolute top-2 text-black inline-flex items-center text-xs">86 Online <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
        </div>
      </div>
    </main>
  );
};

export default Live;