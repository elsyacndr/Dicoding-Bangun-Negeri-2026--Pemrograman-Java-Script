 // Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
 function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Menampung data pesanan dalam array
let orders = [];

// Menambahkan pesanan baru
function addOrder(customerName, items) {
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: items.reduce((total, item) => total + item.price, 0),
    status: 'Menunggu',
  };

  orders.push(newOrder);
}

// Memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);

  if (order) {
    order.status = status;
  }
}

// Menghitung total pendapatan dari pesanan yang selesai
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Menghapus pesanan berdasarkan ID
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
