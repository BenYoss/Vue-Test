export default function updateToLocalStorage(state) {
  localStorage.setItem('store', JSON.stringify({
    completedListContainer: state.completedListContainer,
    listContainer: state.listContainer,
  }));
}
