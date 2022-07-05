import axios from "axios";

function Footer() {

  function postMessage() {

    let input = document.querySelector('#input')

    let body = {
      author: 'User',
      message: input.value
    }
    if (input.value) {
      axios.post('http://localhost:4040/messages', body)
      .then(res => { 
        window.location.reload()
        window.scrollTo(0, document.body.scrollHeight);
       })
    }
    else {
      alert('Xabarni kiriting!')
    }
    
  }

  return (
    <div className="w-full p-5 fixed bottom-0 left-0 right-0 flex gap-3 bg-zinc-900">
      <input id="input" className="w-full p-3 rounded-xl appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Message..." />
      <button onClick={postMessage} className="btn btn-blue rounded-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">Send</button>
    </div>
  )
}

export default Footer