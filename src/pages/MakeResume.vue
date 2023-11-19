<template>
  <div class="container">
      <section class="select-sample" >
          <h2>Шаблон резюме</h2>
          <div  class="select-sample-imgs">
              <img @click.stop="selected_pattern = 0" src="@\assets\img\image 267.png" alt="">
              <img @click.stop="selected_pattern = 1" src="@\assets\img\image 268.png" alt="">
          </div>
          <button >Выбрать</button>
      </section>
    <section class="about-us">
      <h2>О себе</h2>
      <div class="forms">
        <div class="grid-container">
          <div class="forms__item">
            <p>Имя</p>
            <input v-model="resume.name" type="text" />
          </div>
          <div class="forms__item">
            <p>Фамилия</p>
            <input type="text" />
          </div>
          <div class="forms__item">
            <p>Отчество (при наличии)</p>
            <input type="text" />
          </div>


          <div class="photo">
            <p>Фото</p>
            <div class="file-select-overflow">
              <input class="file-select" type="file" />
            </div>
          </div>
          <button>Добавить фото</button>
        </div>

          <div class="forms__item">
            <p>Адрес</p>
            <input v-model="resume.address" type="text" />
          </div>
        <div class="forms__item">
          <p> Телефон</p>
          <input v-model="resume.telephone" type="text" />
        </div>
        <div class="forms__item">
          <p>Email</p>
          <input v-model="resume.email" type="text" />
        </div>
        <div class="forms__item">
          <p>Дополнительно</p>
          <input v-model="about" type="text" />
        </div>
          <div class="forms__item">
            <p>Желаемая работа</p>
            <input v-model="about" type="text" />
        </div>
      </div>
    </section>
    <section>
      <h2>Опыт работы</h2>

      <div class="forms">
        <div class="forms__item">
          <p>Название компании</p>
          <input v-model="resume.works[0].name" type="text" />
        </div>
        <div class="forms__item">
          <p>Должность</p>
          <input  v-model="resume.works[0].role"  type="text" />
        </div>
        <div class="forms__item">
          <p>Дата трудоустройства</p>
          <input v-model="resume.works[0].start" type="text" />
        </div>
        <div class="forms__item">
          <p>Дата увольнения</p>
          <input v-model="resume.works[0].end" type="text" />
        </div>
      </div>
    </section>
    <section>
      <h2>Образование</h2>

      <div class="forms">
        <div class="forms__item">
          <p>Название учебного заведения</p>
          <input type="text" />
        </div>
        <div class="forms__item">
          <p>Уровень (бакалавр, магистр, доктор)</p>
          <input type="text" />
        </div>
        <div class="forms__item">
          <p>Год поступления</p>
          <input type="text" />
        </div>
        <div class="forms__item">
          <p>Год выпуска</p>
          <input type="text" />
        </div>
      </div>
    </section>
    <section>
      <h2> Навыки</h2>

      <div class="forms">
        <div class="forms__item">
          <p>Hard skills</p>
          <input type="text" />
        </div>
        <div class="forms__item">
          <p>Soft skills</p>
          <input type="text" />
        </div>
      </div>
    </section>
    <section>
      <h2>Языки</h2>

      <div class="forms">
        <div class="forms__item">
          <p>Язык</p>
          <input type="text" />
        </div>
        <div class="forms__item">
          <p>Уровень (cerf)</p>
          <input type="text" />
        </div>
      </div>
    </section>
    
  </div>
<review-resume :resume="resume" />
</template>

<script>
import ReviewResume from "../components/ReviewResume.vue";

export default {

  components: {
    ReviewResume
  },
    data() {
        return {
            selected_pattern: 0,
            resume: {
                pattern_id: 0,
                name: "Булат",
                surname: "Алимбеков",
                patronymic: "",
                address: "Владивосток, Россия",
                telephone: "(999) 999-9999",
                email: "00000@gmail.com",
                work: "",
                about:"Являясь всего лишь частью общей картины, предприниматели в сети интернет, инициированные исключительно синтетически, объединены в целые кластеры себе подобных.",

                works: [
                    {
                        name: "ANO Rassvet ",
                        role: "Machine Learning Engineer",
                        start: "Январь 2023 ",
                        end: "февраль 2023"
                    }
                ],
                languages: [
                    {
                    name: "",
                    level: ""
                    }
                ],
                skils: [
                    {
                        name: "Sketch",
                        is_soft: true
                    }
                ],
                studies: [
                    {
                        name: "ДВФУ",
                        level: "",
                        program: "",
                        start: "",
                        end: "",
                    }
                ]

            }
        }
    },

};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";
.select-sample {
    .select-sample-imgs {
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        max-width: 448px;
        img {
            margin: 0 5% 0 0;
            max-width: 448px;
            max-height: 447px;
            width: 100%;
            object-fit: cover;
        }
    }
    button {
        border-radius: 10px;
        border: 1px solid #0F0F0F;
        color: #0F0F0F;

        text-align: center;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 135%; /* 27px */
        letter-spacing: 0.4px;
        padding: 5px 10px;
    }
}
h2,
p {
  color: $main;
}
.forms__item {
    margin: 0 0 0 30px;
    input {
  padding: $pd1;
  margin: $pd1 0 $pd1 - 4px 0;
  border-radius: 10px;
  width: 100%;
  height: 65px;
  border: none;
  background: #e2e2e2;
}
}

.container {
    background: #fff;
    border-radius: 10px;
}
.about-us {
  .forms {
    .grid-container {
      display: grid;

      grid-template-columns: 1fr 1fr 230px 1fr;
      
      column-gap: 15px;

      grid-template-areas:
      
        "item1 item1 photo 0"
        "item2 item2 photo 0"
        "item3 item3 button 0"
;
      .forms__item {

        input {
          width: 90%;
        }
      }
      .forms__item:nth-child(1) {
        grid-area: item1;
      }
      .forms__item:nth-child(2) {
        grid-area: item2;
      }
      .forms__item:nth-child(3) {
        grid-area: item3;
      }

      button {
        width: 100%;
        height: 50%;
        grid-area: button;
        // padding: $pd1;
        border-radius: 10px;
        background: none;
        border: 1px solid #0f0f0f;
      }
      .photo {
        grid-area: photo;
        .file-select-overflow {
          margin: 15px 0;
          border-radius: 10px;
          width: 100%;
          height: 230px;
            padding: 0;
          background: #e2e2e2;
          .file-select {
              margin: 0;
            width: 240px;
            height: 290px;
            opacity: 0;
            z-index: 100;
            cursor: pointer;
          }
        }

      }
    }
  }
}
</style>