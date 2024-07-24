import { ref } from "vue";

export const useFishStore = () => {
  const fishList = ref([]);
  let fishId = 1;

  const addFish = (fish) => {
    const fishWithId = { ...fish, id: fishId++ };
    fishList.value.push(fishWithId);
  };

  return {
    fishList,
    addFish,
  };
};
