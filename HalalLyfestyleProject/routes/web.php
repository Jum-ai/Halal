<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CeramahEducationController;
use App\Http\Controllers\HadistEducationController;
use App\Http\Controllers\DiscussionForumController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UstadzController;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\IslamicNewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'role:creator', 'verified'])->group(function () {
    Route::get('/add-hadist-edu', function () {
        return Inertia::render('Creator/AddHadist');
    })->name('add.hadist.edu');
    Route::post('/add-hadist', [HadistEducationController::class, 'store'])->name('add.hadist');
    Route::post('/add-video', [CeramahEducationController::class, 'store'])->name('add.video');
    Route::get('/add-video', function () {
        return Inertia::render('Creator/AddVideo');
    })->name('add.video.edu');
    Route::get('/add-news', function () {
        return Inertia::render('Creator/AddNews');
    })->name('add.news');
    Route::post('/add-news', [IslamicNewsController::class, 'store'])->name('store.news');
    Route::get('/foods/create', [FoodController::class, 'create'])->name('foods.create');
    Route::post('/foods', [FoodController::class, 'store'])->name('foods.store');
    Route::get('/creator/payments', [PaymentController::class, 'index'])->name('creator.payments');
    Route::post('/creator/payments/{payment}/confirm', [PaymentController::class, 'confirm'])->name('creator.payments.confirm');
    Route::get('/ustadz/create', [UstadzController::class, 'create'])->name('ustadz.create');
    Route::post('/ustadz', [UstadzController::class, 'store'])->name('ustadz.store');

});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/product', function () {
        return Inertia::render('Main/Product');
    })->name('product');
    Route::get('/education', [CeramahEducationController::class, 'index'])->name('education');
    Route::get('/', [UstadzController::class, 'index'])->name('dashboard');
    Route::get('/news', function () {
        return Inertia::render('Main/News');
    })->name('news');
    Route::get('/add-forum', function () {
        return Inertia::render('Creator/AddNews');
    })->name('add.hadist');
    Route::get('/user/setting', function () {
        return Inertia::render('User/Setting');
    })->name('user.setting');
    Route::get('/user/profil', function () {
        return Inertia::render('User/Profil');
    })->name('user.profil');
    Route::get('/forum', [DiscussionForumController::class, 'index'])->name('forum.index');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::put('/profile/{id}', [ProfileController::class, 'update'])->name('profile.update');
    Route::resource('foods', FoodController::class);
    Route::post('/foods/{food}/review', [FoodController::class, 'addReview'])->name('foods.addReview');
    Route::get('/forum/{kategori}/{id}', [DiscussionForumController::class, 'show']);
    Route::post('/messages', [MessageController::class, 'store'])->name('messages.store');
    Route::post('/orders', [OrderController::class, 'store'])->name('request.order');
    Route::get('/keranjang', [OrderController::class, 'index'])->name('keranjang');
    Route::post('/payment/process', [PaymentController::class, 'process'])->name('payment.process');
    Route::get('/forum/create', [DiscussionForumController::class, 'create'])->name('forum.create');
    Route::post('/forum/{kategori}', [DiscussionForumController::class, 'store'])->name('forum.store');
    Route::post('/add-balance', [ProfileController::class, 'addBalance'])->name('add.balance');

});



require __DIR__.'/auth.php';
