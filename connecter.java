package com.example.etape1;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class connecter extends AppCompatActivity {

    private View textViewInscrire;
    private  EditText  editTextEmail, editTextPassword;
    private Button buttonLogin;
    FirebaseAuth mAuth;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.connexion);

        // Initialiser les éléments de l'interface utilisateur
        mAuth= FirebaseAuth.getInstance();
        editTextEmail = findViewById(R.id.editTextEmail);
        editTextPassword = findViewById(R.id.editTextPassword);
        buttonLogin = findViewById(R.id.buttonLogin);
        textViewInscrire = findViewById(R.id.inscrire);

        // Ajouter un écouteur de clic au bouton de connexion
        buttonLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Récupérer les valeurs entrées par l'utilisateur
                String email = editTextEmail.getText().toString();
                String password = editTextPassword.getText().toString();


                mAuth.signInWithEmailAndPassword(email, password)
                        .addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                            @Override
                            public void onComplete(@NonNull Task<AuthResult> task) {
                                if (task.isSuccessful()) {
                                    Toast.makeText(connecter.this, "connexion réussie.",
                                           Toast.LENGTH_SHORT).show();
                                    Intent intent = new Intent(connecter.this, menuu.class);
                                    startActivity(intent);


                                    // Sign in success, update UI with the signed-in user's information
                                } else {

                                    Toast.makeText(connecter.this, "connexion échouée.",
                                            Toast.LENGTH_SHORT).show();

                                }
                            }
                        });

                // Ici, vous pouvez ajouter la logique pour traiter les données, par exemple, vérifier les informations d'identification, etc.

                // Afficher un message de connexion réussie
                //String message = "Connexion réussie pour l'email : " + email;
                //Toast.makeText(connecter.this, message, Toast.LENGTH_SHORT).show();
            }
        });

        // Ajouter un écouteur de clic au texte d'inscription
        textViewInscrire.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(connecter.this,utilisateur.class);
                startActivity(intent);
                // Ici, vous pouvez ajouter la logique pour rediriger l'utilisateur vers l'écran d'inscription
                //Toast.makeText(connecter.this, "Redirection vers l'écran d'inscription", Toast.LENGTH_SHORT).show();
            }
        });
    }
}