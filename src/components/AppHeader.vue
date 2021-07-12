<template>
    <header class="header">
            <div class="header__content _container">
                <a href="" class="header__logo">InterviewTop</a>
                <div class="header__menu menu">
                    <nav class="menu__body">
                        <ul class="menu__list">
                            <li><a href="" class="menu__link">Кандидати</a></li>
                            <li><a href="" class="menu__link">Пропозиції</a></li>
                            <li><a href="" class="menu__link">Найми</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="header__controls">
                    <form class="header__form form" action="#">
                        <div class="form__row">
                            <select name="form[]" id="" class="header__lang form">
                                <option value="Ua" selected="selected">Ua</option>
                                <option value="2"></option>
                            </select>
                        </div>
                    </form>
                    <div class="header__auth">
                        <a href="" class="header__action">Увiйти</a>
                        <a href="" class="header__user _icon-user-regular"></a>
                    </div>
                </div>
            </div>
        </header>
</template>
<script>
export default {
  name: 'AppHeader',
  data () {
    return {
    }
  }
}
</script>
