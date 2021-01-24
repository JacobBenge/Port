using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using System.IO;
using System.Reflection;

namespace CarListStruct
{
    private List<Automobile> carList = new List<Automobile>();

    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }
    }

    private void GetData()
    {
        var assembly = IntrospectionExtensions.GetTypeInfo(typeof(MainPage)).Assembly;

        Stream stream = assembly.GetManifestResourceStream("CarListStruct.carlist.txt");



        using (var reader = new StreamReader(stream))

        {

            while (!reader.EndOfStream)

            {

                string[] tempAuto = reader.ReadLine().Split(',');

                Automobile auto = new Automobile();

                auto.Make = tempAuto[0];

                auto.Model = tempAuto[1];

                auto.Year = int.Parse(tempAuto[2]);

                auto.Mileage = double.Parse(tempAuto[3]);

                carList.Add(auto);

                PckAutomobile.Items.Add(auto.Model);

            }

        }
    }
    struct Automobile
    {
        public string Make;
        public string Model;
        public int Year;
        public double Mileage;
    }

    public event EventHandler SelectedIndexChanged;
}
