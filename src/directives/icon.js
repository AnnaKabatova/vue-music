// this directive is registered globally, free to use in any file
export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value} text-xl`;

    // use modifier :full on v-icon to pass the full class name
    if (binding.arg === 'full') {
      iconClass = binding.value;
    }

    // if v-icon.right applied, the icon will be moved to the right
    if (binding.modifiers.right) {
      iconClass += ' float-right';
    }

    // if v-icon.red applied, the icon will be red, otherwise - green
    if (binding.modifiers.red) {
      iconClass += ' text-red-400';
    } else {
      iconClass += ' text-green-400';
    }

    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
