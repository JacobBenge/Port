using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace JBFitnessApp
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            //Landing page
            MainPage = new NavigationPage(new MainPage());
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
