export default function MenuItem( ) {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center">
        <img src="/pizza.png" alt="pizza" />
        <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy text</p>
        <button className="mt-4 bg-primary text-white rounded-full px-6 py-2">Add to cart $10</button>
    </div>
    )
}