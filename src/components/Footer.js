function Footer() {
  return (
    <footer className="py-8 bg-black text-center text-white">
      <p className="animate-fadeIn">Save cats and get rich!</p>
      <div className="mt-4">
        <a href="https://t.me/save_meows" className="mx-2 text-purple-500 hover:text-purple-600 animate-pulse">
          Telegram
        </a>
        <a href="https://x.com/save_meows" className="mx-2 text-purple-500 hover:text-purple-600 animate-pulse">
          X
        </a>
      </div>
    </footer>
  );
}

export default Footer;