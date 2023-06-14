export default function Card({ data }) {
    console.log(data.answer);
    return (
    <div className=" mt-5 mb-5 rounded-lg px-5 py-4 bg-gray-100 border border-transparent transition-colors hover:border-gray-300">
        <div className="">
            <h2>{data.title}</h2>
            <p>{data.description}{data.answer}</p>
            <p></p>
            
        </div>
    </div>
    );
  }
  