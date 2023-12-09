package com.example.etape1;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;
import java.util.List;

public class ajouter extends AppCompatActivity {

    private EditText Nom;
    private EditText Prenom;
    private EditText num;
    private Button Ajouter;
    private View textViewRetour;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.ajout);

        // Initialiser les éléments de l'interface utilisateur
        Nom = findViewById(R.id.editTextNom);
        Prenom = findViewById(R.id.editTextPrenom);
        num = findViewById(R.id.editTextnuméro);
        Ajouter = findViewById(R.id.buttonAjouter);
        textViewRetour= findViewById(R.id.retour);
        // Ajouter un écouteur de clic au bouton "Ajouter"
        Ajouter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), etudiant.class);
                intent.putExtra("nom", Nom.getText().toString());
                intent.putExtra("prénom", Prenom.getText().toString());
                intent.putExtra("num", num.getText().toString());
                startActivity(intent);
                // Récupérer les valeurs entrées par l'utilisateur
                String nom = Nom.getText().toString();
                String prenom = Prenom.getText().toString();
                String numéro = num.getText().toString();
            }
        });
        textViewRetour.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(ajouter.this, menuu.class);
                startActivity(intent);
            }
    });
    }
}



