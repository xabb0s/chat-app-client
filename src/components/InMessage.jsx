function InMessage({ message }) {
  return (
    <div className="gap-3 w-fit mt-3">
      <div className="text-lg text-white font-bold mr-20 ml-2">
        {message.author}
      </div>
      <div className="bg-zinc-800 p-3 text-base text-white font-medium rounded-xl rounded-tl-none">
        {message.message}
      </div>
    </div>
  )
}

export default InMessage