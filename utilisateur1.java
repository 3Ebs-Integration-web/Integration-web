package com.example.etape1;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class utilisateur1 extends AppCompatActivity {

    private EditText editTextNom, editTextPrenom, editTextnuméro, editTextPassword, editTextMatiere;
    private Button buttonInscrire;
    private DatabaseReference utilisateursRef;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.inscription1);

        // Initialiser les éléments de l'interface utilisateur
        editTextNom = findViewById(R.id.editTextNom);
        editTextPrenom = findViewById(R.id.editTextprénom);
        editTextnuméro = findViewById(R.id.editTextnuméro);
        editTextPassword = findViewById(R.id.editTextPassword);
        editTextMatiere = findViewById(R.id.matiére);
        buttonInscrire = findViewById(R.id.buttoninscrire);

        // Initialisez la référence à la base de données "utilisateurs"
        utilisateursRef = FirebaseDatabase.getInstance().getReference("utilisateurs");

        // Ajouter un écouteur de clic au bouton d'inscription
        buttonInscrire.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Récupérer les valeurs entrées par l'utilisateur
                String nom = editTextNom.getText().toString();
                String prenom = editTextPrenom.getText().toString();
                String numéro = editTextnuméro.getText().toString();
                String mdp = editTextPassword.getText().toString();
                String matiere = editTextMatiere.getText().toString();

                // Ici, vous pouvez ajouter la logique pour traiter les données
                // Par exemple, envoyez à un serveur ou enregistrez dans la base de données Firebase

                // Ajouter l'utilisateur à la base de données
                String userId = utilisateursRef.push().getKey(); // Générer une clé unique pour l'utilisateur
                if (userId != null) {
                    utilisateursRef.child(userId).child("nom").setValue(nom);
                    utilisateursRef.child(userId).child("prenom").setValue(prenom);
                    utilisateursRef.child(userId).child("numéro").setValue(numéro);
                    utilisateursRef.child(userId).child("mdp").setValue(mdp);
                    utilisateursRef.child(userId).child("matiere").setValue(matiere);

                    // Afficher un message de réussite
                    String message = "Inscription réussie : \nNom : " + nom + "\nPrénom : " + prenom + "\nNuméro de carte d'étudiant : " + numéro + "\nMatière : " + matiere;
                    Toast.makeText(utilisateur1.this, message, Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}

