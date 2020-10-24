import { ref } from "vue";

export default function(url, options) {
  const data = ref(null);
  const err = ref(null);
  const isLoading = ref(false);

  const fetchData = async function() {
    isLoading.value = true;

    try {
      const res = await fetch(url, options);
      const json = await res.json();
      data.value = json.data;
    } catch (err) {
      err.value = err;
    } finally {
      setTimeout(() => (isLoading.value = false), 2000);
    }
  };

  return { data, err, isLoading, fetchData };
}
