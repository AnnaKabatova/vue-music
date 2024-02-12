// this directive is registered locally, only available in HomeView
export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value.icon} text-xl text-green-400`;

    if (binding.value.right) {
      iconClass += ' float-right';
    }

    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};

