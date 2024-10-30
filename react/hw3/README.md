Задание 1

Создадим простое приложение с возможностью менять рейтинг.

Создайте новый файл Rating.jsx.

Внутри файла Rating.jsx импортируйте useState из React.

Создайте функциональный компонент Rating.

Внутри компонента Rating используйте useState для создания состояния ratingValue, начальное значение которого будет равно 0.

Определите массив ratingList, содержащий ссылки на изображения для разных значений рейтинга.

Верните JSX в компоненте Rating, который будет содержать:

- Изображение текущего рейтинга из массива ratingList.

- Кнопки с различными значениями рейтинга (например, "Плохо", "Приемлемо", "Хорошо", "Отлично").

Для каждой кнопки установите обработчик события onClick, который будет обновлять состояние ratingValue в соответствии с выбранным значением рейтинга.

Внутри компонента Rating определите возвращаемый JSX так, чтобы изображение рейтинга и кнопки располагались внутри контейнера <div>.

В файле App.js импортируйте компонент Rating из файла Rating.jsx.

В компоненте App используйте компонент Rating.

Стилизуйте приложение на ваш вкус: задайте цвет и размер кнопкам, задайте размер изображениям и т.п.

Запустите ваше React-приложение и убедитесь, что компонент Rating отображается и работает корректно, позволяя пользователю выбирать разные значения рейтинга.

Данные для выполнения заданий:

const ratingList = [

    'https://www.clipartmax.com/png/middle/448-4489878_1-out-of-5-stars-1-star-rating-png.png',

    'https://yandex-images.clstorage.net/BfZd98401/dfc16eLh/cZTUDRgvoewTiP3kvhMHnZsi808IyapXqWRJFK9zzP0iG0GryiX7oshLXPpyAvL5VlWfrLpElJ2VhytuQN1WIJHA5AlM65X9xt355Vr3x-0LYwf-3EmuJmxE-GUfBiiowquU26zWOfCaKJ5sBcDVHvdky_0r4bFNkNbKjyTe5eGB5fY_-OyxqrP7PXAcsHQsyGLXz3hojhf-VuhSPFWbXePugI3vV0uBylmtrwRS1h-0Vqm7-EHh_MDUXQ9EnIT2oXUlTDgeIZvB6_wynzFkbJkTJs87m2x0P5VaQn_WyQwS3CG8XXepMprZnN11EOVNF1U6SVtSAxyRphzc9M40NZDHlW6rXdKaAkjtcA8Tpvx44vYNCZj-9cxXqSHsVit8MHwDr-_F-IJZqH0fpSJ2rxUF-Nn5AqDvIwZefxUtNwfxlRTe230hqVD5P5Lv0AYuWfPUnGo6rcfNt-rDv5XpnQBsAMwsZRrSSLoMzQUz1852NqnamoEgLODmDS8UHcUW0TfnPqh8oJmRaOyzToHXzHjQZMxLmGxGDgTow2xlaU3wHgG9Pqe4wZrrXD9VYGQulYUbC5hg400A9b4OFM30paLFB4_7PmKpYYqMM_zT5P7ZExQNGKgdN551q7GuRGuf8j7xbL9kmJJrWAwup3DH7TW3Wcl7MiCuwuQfXNavhAeixyaOqi_jm_GbncPMk9e9e_I3bToKDufetZgDXDe7vOD8gkwcJriS6qtcHETQ107EB9m5eqMSL6C1XKx3DcZ1MZfGDGs8MJjS-_yTDzI23_mDFY-ZuF-3_RSIAxxkmqwRDTFsvFX4sMqqP51GIkU85rbYyJvgsL6SdZ3s5b-091IXZ19JDiFYI6pMwyyDd85KQ6deqvmPNxy1WwAeNdlMAqxQzq51a6Dquv5etRLkzRSlWSs4E0KMUFe-rYQvBreyJpa9Ga2R2eNp_1E8k7eve-E3vuqonrcf5jngP_bKk',

    'https://sun9-28.userapi.com/impf/c855436/v855436801/d69a5/8TdLk-8oMHA.jpg?size=1161x913&quality=96&sign=fc8537d8437b1421872208ca5e29fc8a&c_uniq_tag=3sdCGa_KUxOtSRVS5RNDFGr77OoKVRi8MwqGagANG1E&type=album',

    'https://banner2.kisspng.com/20181128/uct/kisspng-galatasaray-s-k-dream-league-soccer-uefa-champion-yldz-clipart-ourclipart-5bff31fccd2c99.8288298815434511328404.jpg'

]

Задание 2 \*

Компонент "Список приглашенных"

Создайте новый компонент List.jsx.

Внутри него импортируйте useState из React.

Внутри компонента List используйте useState для создания состояния people, начальное значение которого будет массивом объектов людей с их именами и возрастами.

Верните JSX в компоненте List, который будет содержать:

Список для отображения людей.

Каждый элемент списка будет содержать имя и возраст человека.

Для каждого элемента в списке предусмотрите кнопку удаления.

Добавьте обработчик события для кнопки удаления студента, который будет обновлять состояние people, удаляя соответствующего человека из списка.

Внутри компонента List определите возвращаемый JSX так, чтобы список с информацией о людях и кнопками удаления располагался внутри контейнера <div>.

Создайте файл App.js.

В файле App.js импортируйте компонент List из файла List.jsx.

В компоненте App используйте компонент List.

Стилизуйте приложение на ваше усмотрение

Запустите ваше React-приложение и убедитесь, что компонент List отображается и позволяет пользователю удалять студентов из списка.

Данные для выполнения заданий:

const [people, setPeople] = useState([

    { id: 1, name: 'Иван', age: 20 },

    { id: 2, name: 'Мария', age: 22 },

    { id: 3, name: 'Алексей', age: 21 },

    { id: 4, name: 'Марина', age: 19 },

    { id: 5, name: 'Даша', age: 23 },

    { id: 6, name: 'Глеб', age: 24 },

    { id: 7, name: 'Дима', age: 18 },

    { id: 8, name: 'Гриша', age: 20 },

    { id: 9, name: 'Серафим', age: 21 }

]);
