<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package mist-tw
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'mist-tw' ); ?></a>

	<header class="flex flex-col items-stretch justify-center">
      <section
        class="flex w-full flex-col items-center justify-center bg-white py-4 pl-16 pr-8 shadow-sm max-md:max-w-full max-md:px-5"
      >
        <div
          class="flex w-full max-w-[1273px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2717c82ff7503c50378e9d9246f12c25ab8f77d7718c03c87971baa102a86c2?apiKey=d2901712336543089af45c2c49795494&"
            class="aspect-[5.69] w-[199px] max-w-full shrink-0 overflow-hidden object-contain object-center"
          />
          <a
            href="#"
            class="my-auto flex items-stretch justify-between gap-5 self-center max-md:max-w-full max-md:flex-wrap"
          >
            <div class="flex items-stretch justify-between gap-1.5">
              <h2
                class="grow whitespace-nowrap text-base font-bold leading-6 text-blue-600"
              >
                Про МІСТ
              </h2>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/701836ef3028c2369dd37737d83815478b97c345b811ffa14f83181bd1352ac0?apiKey=d2901712336543089af45c2c49795494&"
                class="my-auto aspect-square w-5 max-w-full shrink-0 items-center justify-center self-center overflow-hidden object-contain object-center"
              />
            </div>
          </a>
          <div class="text-base font-medium leading-6 text-gray-900">
            Новини та публікації
          </div>
          <div class="text-base font-medium leading-6 text-gray-900">Події</div>
          <a href="#" class="flex items-stretch justify-between gap-1.5">
            <div
              class="grow whitespace-nowrap text-base font-medium leading-6 text-gray-900"
            >
              Освіта
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1eb5414fb8cc7b05660f5c5814feea125469dafa4fdea1a8f0dde1ec641b301?apiKey=d2901712336543089af45c2c49795494&"
              class="my-auto aspect-square w-5 max-w-full shrink-0 items-center justify-center self-center overflow-hidden object-contain object-center"
            />
          </a>
          <div class="text-base font-medium leading-6 text-gray-900">
            Приєднатися
          </div>
          <div
            class="whitespace-nowrap text-base font-medium leading-6 text-gray-900"
          >
            Контакти
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/328350b06f1ca571f8d79cf310b47f0f2ab344b3900a4d8b58a68bf0ba0acd2c?apiKey=d2901712336543089af45c2c49795494&"
          class="my-auto aspect-square w-8 max-w-full shrink-0 self-center overflow-hidden object-contain object-center"
        />
        <div class="flex items-stretch justify-between gap-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91932a952d5df964aba7c657dad435e72ce1523712f797f920538d3a79e80ce7?apiKey=d2901712336543089af45c2c49795494&"
            class="aspect-square w-[35px] max-w-full shrink-0 overflow-hidden object-contain object-center"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6189947e9a68c24d5af6c301df61b2c96c57f9e3a21d63e38e30b923c0d6da95?apiKey=d2901712336543089af45c2c49795494&"
            class="my-auto aspect-square w-[30px] max-w-full shrink-0 self-center overflow-hidden object-contain object-center"
          />
        </div>
      </section>
    </header>
	<!-- #masthead -->
